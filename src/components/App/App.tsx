import "./App.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect } from "react";
import {ImageModal} from "../ImageModal/ImageModal";
import { ToastContainer } from "react-toastify";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Image } from "../types";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = (topic: string): void => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  
  const handLoadMore = async () => {
    setPage(page + 1);
  };

  // модалка
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [modalIsOpen, setIsModalOpen] = useState<boolean>(false);
  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onMoreClick={handLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          selectedImage={selectedImage}
          onRequestClose={closeModal}
        />
      )}
      <ToastContainer />
    </>
  );
}