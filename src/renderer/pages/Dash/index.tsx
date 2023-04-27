import { Button, Card, Container, Input, Spacer, Table, Text } from "@nextui-org/react";
import { FC } from "react";

interface Props {

}

const Dashboard: FC<Props> = () => {
  const columns = [
    {
      key: "id",
      label: "编号",
    },
    {
      key: "title",
      label: "标题",
    },
    {
      key: "url",
      label: "链接",
    },
    {
      key: "status",
      label: "状态",
    },
    {
      key: "actions",
      label: "操作",
    },
  ];
  const rows: any[] = [ ];
  return (
  <Container fluid>
   <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
          hideHeader={column.key === "actions"}
          align={column.key === "actions" ? "center" : "start"}
          key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  </Container>
  );
}

export default Dashboard;
