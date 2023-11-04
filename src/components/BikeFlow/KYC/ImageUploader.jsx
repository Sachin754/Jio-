import { Button, Container, Input, Spinner, Text, Image, Icon } from "@jds/core";
import { IcClose, IcSuccessColored, IcUpload } from "@jds/core-icons";
import React, { useState } from "react";
import styles from "@/styles/BikeFlow/KYC/ImageUploader.module.scss"
import { updateField } from "@/components/Redux/action";
import { useDispatch, useSelector } from "react-redux";

const ImageUploader = (props) => {
  const { selectedVerification, side, setFrontImage, setBackImage } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState('');
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
  const fileInputRef = React.createRef();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoading(true);

      const reader = new FileReader();
      setSelectedImage(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        setIsLoading(false);
        setImageName(file.name); // Set the name here
      };
      if (side === 'front') {
        setFrontImage(file)
      } else {
        setBackImage(file)
      }
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (side === 'front') {
      setFrontImage(null)
    } else {
      setBackImage(file)
    }
    setImageName(''); // Reset the name
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container className={styles.uploadImageContainer} >
      <Container className={styles.mainContainer}>
        {selectedImage ? (
          <Container className={styles.displayImageContainer}>
            <Container className={styles.imageContainer}>
              <Image
                src={selectedImage}
                alt="Uploaded"
                className={styles.image}
              />
            </Container>
            <Container className={styles.nameCloseIcon}>
              <Container className={styles.tickWithName}>
                <IcSuccessColored style={{ width: "1.5rem" }} />
                <Text className={styles.name} appearance="body-xs">{imageName}</Text>
              </Container>
              <Icon className={styles.icon} ic={<IcClose />} onClick={handleRemoveImage} />
            </Container>
          </Container>
        ) : (
          <Container className={styles.imageDocumentInputContainer}>
            <Text appearance='body-xs' className={styles.label}>Upload {selectedVerification} {side} image</Text>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <Button className={styles.btn}
              onClick={handleUploadButtonClick}
              iconLeft={<IcUpload />}
              kind="secondary"
              title="Upload"
            />
            <Text appearance='body-xs' className={styles.label}>JPG, PNG, PDF supported. Max size 5MB.</Text>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default ImageUploader;
