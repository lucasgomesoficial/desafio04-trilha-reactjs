import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormHandles } from "@unform/core";
import { FiCheckSquare } from "react-icons/fi";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Form } from "./styles";

type FoodData = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
};

type ModalAddFoodProps = {
  editingFood: FoodData;
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: FoodData) => void;
};

export const ModalWithRef: ForwardRefRenderFunction<
  FormHandles,
  ModalAddFoodProps
> = ({ isOpen, setIsOpen, handleUpdateFood, editingFood }, ref) => {
  const handleSubmit = async (data: FoodData) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={ref} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export const ModalEditFood = forwardRef(ModalWithRef);
