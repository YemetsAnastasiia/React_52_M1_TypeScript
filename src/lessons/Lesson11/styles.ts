import styled from "@emotion/styled";

export const Lesson11Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 20px;
  padding: 40px;
  background-image: url("https://yac-wh-sb-prod-s3-media-07001.storage.yandexcloud.net/media/images/small-red-kitten-scottish-fold.max-2880x1820.format-jpeg_O0zIZ6x.jpg");
  background-size: cover;        
  background-position: center;   
  background-attachment: fixed; 

`;

export const CatsFactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 400px;
`;

export const CatFact = styled.div`
  gap: 30px;
  background-color: #f1cdffc5;
  border: 2px solid #bd3eef48;
  border-radius: 4px;
  padding: 10px;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  font-size: 24px;
  min-width: 800px;
  max-height: 700px;
  overflow: auto;
`;

export const ButtonWrapper = styled.div`
  width: 320px;
`;

export const Error = styled.p`
  width: 600px;
  padding: 20px;
  background-color: #eb9378;
  border: 2px solid #e61212;
  border-radius: 6px;
  color: #e61212;
  font-size: 28px;
  font-weight: bold;
`;
