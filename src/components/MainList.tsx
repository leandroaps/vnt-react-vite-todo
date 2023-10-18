import { DeleteFilled } from "@ant-design/icons";
import { createRandomWords } from "../data";
import { List, Button, Card, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store";

const { Text } = Typography;

const MainList = () => {
  const dispatch = useDispatch();

  const handleItemAdd = (item: any) => {
    dispatch(addItem(item));
  };

  const handleItemRemove = (item: any) => {
    dispatch(removeItem(item));
  };

  const randomWords = useSelector((state: any) => {
    return state.items;
  });

  const renderedList = randomWords.map((item: string) => {
    return (
      <List.Item key={item}>
        <Button onClick={() => handleItemRemove("item")}>
          <DeleteFilled />
          <Text>{item}</Text>
        </Button>
      </List.Item>
    );
  });

  return (
    <Card>
      <Button onClick={() => handleItemAdd(createRandomWords())}>
        Add Random Item to list
      </Button>
      <List>{renderedList}</List>
    </Card>
  );
};

export default MainList;
