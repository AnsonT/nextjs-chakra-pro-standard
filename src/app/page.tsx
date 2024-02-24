'use client'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as='section' minH='lg'>
      <Box
        borderBottomWidth='1px'
        bg='bg.surface'
        position='relative'
        zIndex='tooltip'
      >
        <Container py='4'>
          <HStack justify='space-between' spacing='8'>
            <HStack spacing='10'>
              <HStack spacing='3'></HStack>
              <ButtonGroup
                size='lg'
                variant='text'
                colorScheme='gray'
                spacing='8'
                display={{ base: 'none', lg: 'flex' }}
              >
                <Button>Dashbaord</Button>
                <Button>Analysis</Button>
                <Button>History</Button>
              </ButtonGroup>
            </HStack>
            <HStack spacing={{ base: '2', md: '4' }}>
              <InputGroup
                maxW='2xs'
                display={{ base: 'none', md: 'inline-flex' }}
              >
                <InputLeftElement></InputLeftElement>
                <Input placeholder='Search' />
              </InputGroup>
              <ButtonGroup variant='tertiary' spacing='1'>
                <IconButton
                  aria-label='Serach'
                  display={{ base: 'flex', lg: 'none' }}
                  isRound
                />
              </ButtonGroup>
              <Avatar boxSize='10' src='https://i.pravatar.cc/300' />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
