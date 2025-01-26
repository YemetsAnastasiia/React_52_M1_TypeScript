import Button from '../Button/Button';
import './styles.css';
import { useState } from 'react';

function Feedback() {

    const [like, setLikeCount] = useState(0);
    const [dislike, setDislikeCount] = useState(0);

    const likeClick = () => {
        setLikeCount((prevStateLike) => {
            return prevStateLike + 1;
        });
    };

    const dislikeClick = () => {
        setDislikeCount((prevStateDislike) => {
            return prevStateDislike + 1;
        });
    };

    const resetResults = () => {
        setLikeCount(0);
        setDislikeCount(0);
    }

    return (
        <div className='feedback-wrapper'>
            <div className="result-container">{like}</div>
            <div className='button-wrapper'>
                <Button
                    name='Like'
                    type="button"
                    onClick={likeClick}
                />
            </div>
            <div className='button-wrapper'>
                <Button
                    name='Dislike'
                    type="button"
                    onClick={dislikeClick}
                />
            </div>
            <div className="result-container">{dislike}</div>
            <div className='reset-button-wrapper'>
                <Button
                    name='Reset Results'
                    type="button"
                    onClick={resetResults}
                />
      </div> 
        </div>
    );
}

export default Feedback; 