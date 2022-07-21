import Aos from "aos";
import Carousel from "better-react-carousel";
import { useState, useCallback, useEffect } from "react";
import { Image } from '../components/Image';

interface CarouselProps {
    src: [{'src': string, 'title': string, 'description': string}];
    columns: number;
    rows: number;
}

export function CarouselComponent({ src, columns, rows }: CarouselProps) {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);

    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const dot = ({ isActive }) => (
        <span
            style={{
                display: 'inline-block',
                height: isActive ? '8px' : '5px',
                width: isActive ? '8px' : '5px',
                background: '#1890ff'
            }}
        ></span>
    )

    return (
        <Carousel cols={columns} rows={rows} gap={10} loop dot={dot} hideArrow={isViewerOpen}>
            {
                src.map((image, index) => {
                    return <Carousel.Item key={index}>
                      <Image onClick={() => openImageViewer(index)} 
                      title={image.title} path={image.src} 
                      description={image.description}/>
                        {/* <img
                            className='h-[250px] w-[600px] rounded-2xl shadow-lg cursor-pointer'
                            src={image.src}
                            onClick={() => openImageViewer(index)} /> */}
                    </Carousel.Item>
                })
            }
        </Carousel>
    );
}