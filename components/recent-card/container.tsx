import { Flex } from '@chakra-ui/react'

const RecentPostsContainer: React.FC = ({ children }) => {
  return (
    <Flex
      mt="12"
      flexDir={{ sm: 'column', lg: 'row' }}
      justify="space-between"
      flexWrap="wrap"
    >
      {children}
    </Flex>
  )
}

export default RecentPostsContainer
