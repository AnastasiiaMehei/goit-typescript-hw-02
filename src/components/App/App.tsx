import "./App.module.css";
import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { ImageModal, SelectedImage } from "../ImageModal/ImageModal";
import { ToastContainer } from "react-toastify";
import { Image } from "../types";
import { ImageGallery } from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");


useEffect(() => {
  if (searchQuery.trim() === "") {
    return;
  }
  const fetchImages = async (): Promise<void> => { 
    try {
      setIsLoading(true);
      setIsError(false);
      const data: Image[] = await getImages(searchQuery, page); 
      setImages((prevState) => [...prevState,...data]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  fetchImages();
}, [page, searchQuery]); 


  const handleSearch = async (topic: string): Promise<void> => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };

  const handLoadMore = async (): Promise<void> => {
    setPage((prevPage) => prevPage + 1);
  };

  // модалка
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [modalIsOpen, setIsModalOpen] = useState<boolean>(false);
  const handleImageClick = (image: Image): void => {
    const transformedImage: SelectedImage = {
      urls: { 
        full: image.urls.large, 
      },
      alt_description: image.alt_description,
    };
  
    setSelectedImage(transformedImage); 
    setIsModalOpen(true);
  };
  
  const closeModal = (): void => {
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
