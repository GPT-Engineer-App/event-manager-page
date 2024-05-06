import { Container, VStack, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const toast = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    if (credentials.username === "admin" && credentials.password === "admin") {
      navigate("/events");
    } else {
      toast({
        title: "Authentication Failed",
        description: "Invalid username or password",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt="100px">
        <Input
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
      </VStack>
    </Container>
  );
};

export default Index;