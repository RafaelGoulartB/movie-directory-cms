import { NextPage } from 'next'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { HeadSectionProps } from './types'
import { HeadSectionFixtures } from './constants'

const HeadSection: NextPage<HeadSectionProps> = ({
  title = HeadSectionFixtures.title,
  description = HeadSectionFixtures.description
}) => {
  return (
    <Flex bg="gray.100" paddingX={{ sm: 10, lg: 32 }}>
      <Flex
        flexDir="row"
        justifyContent={{ sm: 'center', lg: 'space-between' }}
        alignItems="center"
        textAlign={{ sm: 'center', lg: 'left' }}
        maxW="1200px"
        w="100%"
        mx="auto"
        py={{ sm: '32', lg: '36' }}
      >
        {/* Text Left */}
        <Flex flexDir="column">
          <Heading fontSize={{ sm: '5xl', lg: '6xl' }} maxW="360px">
            {title}{' '}
            <Image src="/images/coffee.png" width={70} height={68} priority />
          </Heading>
          <Text color="gray.500" fontSize={{ sm: '2xl', lg: '3xl' }} pt="10">
            {description}
          </Text>
        </Flex>
        {/* Image Right */}
        <Box display={{ sm: 'none', lg: 'block' }}>
          <Image
            src="/images/head.png"
            width={480}
            height={330}
            quality={100}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default HeadSection
