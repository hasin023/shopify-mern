import { useState } from "react";
import {
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useFetchCategoriesQuery,
} from "../../redux/api/categoryApiSlice";

import CategoryForm from "../../components/CategoryForm";
import Modal from "../../components/Modal";
import AdminMenu from "./AdminMenu";

const CategoryList = () => {

    const { data: categories } = useFetchCategoriesQuery();
    const [name, setName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [updatingName, setUpdatingName] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const [createCategory] = useCreateCategoryMutation();
    const [updateCategory] = useUpdateCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();

    const handleCreateCategory = async () => { };
    const handleUpdateCategory = async () => { };
    const handleDeleteCategory = async () => { };


    return (
        <div className="ml-[10rem] flex flex-col md:flex-row">
            <AdminMenu />
            <div className="md:w-3/4 p-3">
                <div className="h-12 m-3 text-2xl">Create Categories</div>
                <CategoryForm
                    value={name}
                    setValue={setName}
                    handleSubmit={handleCreateCategory}
                />
                <br />
                <hr />

                <div className="flex flex-wrap">
                    {categories?.map((category) => (
                        <div key={category._id}>
                            <button
                                className="bg-white border border-blue-500 text-blue-700 py-2 px-4 rounded-lg m-3 hover:bg-blue-500 hover:text-white focus:outline-none foucs:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                onClick={() => {
                                    {
                                        setModalVisible(true);
                                        setSelectedCategory(category);
                                        setUpdatingName(category.name);
                                    }
                                }}
                            >
                                {category.name}
                            </button>
                        </div>
                    ))}
                </div>

                <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
                    <CategoryForm
                        value={updatingName}
                        setValue={(value) => setUpdatingName(value)}
                        handleSubmit={handleUpdateCategory}
                        buttonText="Update"
                        handleDelete={handleDeleteCategory}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default CategoryList;
