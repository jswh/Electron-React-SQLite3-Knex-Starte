import { Button, Card, Container, Input, Spacer, Text } from "@nextui-org/react";
import { FC } from "react";

interface Props {

}

const Login: FC<Props> = () => {
  return (
  <Container className="center" style={{height: '100vh'}}>
    <Card style={{maxWidth: 400}}>
      <Card.Body>
        <Text h3 style={{textAlign: 'center'}}>登录</Text>
        <Spacer y={2}></Spacer>
        <form>
        <Input
        clearable
        fullWidth
        labelPlaceholder="用户名"
        initialValue="user"
      />
      <Spacer y={1.5}></Spacer>
        <Input
        clearable
        fullWidth
        type="password"
        labelPlaceholder="密码"
        initialValue="pass"
      />
        </form>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default Login;
