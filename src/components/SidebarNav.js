import React from "react";
import { Box, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const { asPath } = useRouter();

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="2xl" fontWeight="bold" color="black.1000" bg="purple.300" px="4" py="2"  borderRadius={5}>
          CADASTRO
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/" ? "black.1000" : ""}
          >
            <Link href="/">
              <Text fontSize="md" fontWeight="medium" color="black.1000">
                Produtos
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize="2xl" fontWeight="bold" color="black.1000" bg="purple.300" px="4" py="2"  borderRadius={5}>
          ESTOQUE
        </Text>
        <Stack>
          <ChakraLink
            _hover={{ bg: "gray.1000" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/balance" ? "gray.200" : ""}
          >
            <Link href="/balance">
              <Text fontSize="md" fontWeight="medium" color="gray.1000">
                Saldo
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockEntries" ? "gray.200" : ""}
          >
            <Link href="/stockEntries">
              <Text fontSize="md" fontWeight="medium" color="gray.1000">
                Entradas
              </Text>
            </Link>
          </ChakraLink>
          <ChakraLink
            _hover={{ bg: "gray.100" }}
            px="4"
            py="2"
            borderRadius={5}
            bg={asPath === "/stockOutputs" ? "gray.200" : ""}
          >
            <Link href="/stockOutputs">
              <Text fontSize="md" fontWeight="medium" color="black.1000">
                Saídas
              </Text>
            </Link>
          </ChakraLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SidebarNav;
