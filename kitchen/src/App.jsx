import { useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  HStack,
  Text,
  Card,
  Button,
  theme
} from '@chakra-ui/react'
import { ArrowBigRight, Trash2 } from 'lucide-react'

const status = {
  TO_PREPARE: 'TO_PREPARE',
  PREPARING: 'PREPARING',
  READY: 'READY',
}

const getFormattedOrder = (orders) => {
  return orders.reduce((acc, order) => {
    const { toprepare, preparing, ready } = acc

    const items = order.items.reduce((acc, item) => {
      if (item.status === status.TO_PREPARE) {
        acc.toprepare.push({ ...item, orderId: order.orderId, clientName: order.name, table: order.table })
      } else if (item.status === status.PREPARING) {
        acc.preparing.push({ ...item, orderId: order.orderId, clientName: order.name, table: order.table })
      } else if (item.status === status.READY) {
        acc.ready.push({ ...item, orderId: order.orderId, clientName: order.name, table: order.table })
      }

      return acc
    }, { toprepare: [], preparing: [], ready: [] })

    return {
      toprepare: [...toprepare, ...items.toprepare],
      preparing: [...preparing, ...items.preparing],
      ready: [...ready, ...items.ready]
    }
  }, { toprepare: [], preparing: [], ready: [] })
}


const ItemInfo = ({ item, handleNextStatus }) => {
  return (
    <Card p={2} bg="white" borderRadius="md" minW="220px">
      <HStack justifyContent="space-between">
        <Stack spacing={2} w="100%" borderRight="2px solid" borderColor="black" pr={4}>
          <Flex justifyContent="space-between">
            <Text fontSize="md">{item.clientName}</Text>
            <Text fontSize="sm" fontWeight="bold">Mesa {item.table}</Text>
          </Flex>
          <Flex gap={2}>
            <Text fontSize="md">{item.name}</Text>
            <Text fontSize="md" fontWeight='bold'>x{item.quantity}</Text>
          </Flex>
        </Stack>
        <Button onClick={() => handleNextStatus(item.orderId, item.id)}>
          {item.status === status.READY ? (
            <Trash2 color={theme.black} />
          ) : (
            <ArrowBigRight color={theme.black} />
          )}
        </Button>
      </HStack>
    </Card>
  )
}

const App = () => {
  const [orders, setOrders] = useState([
    {
      name: 'Felipe Kamada',
      orderId: 1,
      table: 1,
      items: [
        {
          id: 1,
          name: 'Item 1',
          price: 10.00,
          status: status.TO_PREPARE,
          quantity: 1,
        },
        {
          id: 2,
          name: 'Item 2',
          price: 15.00,
          status: status.PREPARING,
          quantity: 1,
        },
        {
          id: 3,
          name: 'Item 3',
          price: 20.00,
          status: status.TO_PREPARE,
          quantity: 1,
        },
      ]
    },
    {
      name: 'Felipe Kamada',
      orderId: 2,
      table: 2,
      items: [
        {
          id: 4,
          name: 'Item 4',
          price: 10.00,
          status: status.TO_PREPARE,
          quantity: 2,
        },
        {
          id: 5,
          name: 'Item 5',
          price: 15.00,
          status: status.READY,
          quantity: 1,
        },
        {
          id: 6,
          name: 'Item 6',
          price: 20.00,
          status: status.READY,
          quantity: 1,
        },
      ]
    }
  ])

  const { toprepare, preparing, ready } = getFormattedOrder(orders)

  const handleNextStatus = (orderId, itemId) => {
    const updatedOrders = orders.map(order => {
      if (order.orderId === orderId) {
        const updatedItems = order.items.map(item => {
          if (item.id === itemId) {
            if (item.status === status.TO_PREPARE) {
              item.status = status.PREPARING
            } else if (item.status === status.PREPARING) {
              item.status = status.READY
            } else if (item.status === status.READY) {
              return null
            }
          }

          return item
        })

        return {
          ...order,
          items: updatedItems ? updatedItems.filter(Boolean) : []
        }
      }

      return order
    })

    setOrders(updatedOrders)
  }

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4} textAlign={'center'}>Pedidos</Text>
      <Stack direction="row" gap={4}>
        <Box w="100%" h="100%" bg="blue.100" borderRadius="md" p={4}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>Aguardando</Text>
          <Stack>
            {toprepare.map(order => (
              <ItemInfo key={order.id} item={order} handleNextStatus={handleNextStatus} />
            ))}
          </Stack>
        </Box>
        <Box w="100%" h="100%" bg="yellow.100" borderRadius="md" p={4}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>Em Preparo</Text>
          <Stack>
            {preparing.map(order => (
              <ItemInfo key={order.id} item={order} handleNextStatus={handleNextStatus} />
            ))}
          </Stack>
        </Box>
        <Box w="100%" h="100%" bg="green.100" borderRadius="md" p={4}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>Pronto</Text>
          <Stack>
            {ready.map(order => (
              <ItemInfo key={order.id} item={order} handleNextStatus={handleNextStatus} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default App
