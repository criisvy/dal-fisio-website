import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Review from "./Review";

const ReviewCarousel = () => {
  return (
    <Carousel className="justify-center">
      <CarouselContent>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
          <Review
            imageSrc="/images/Avatarexample.jpg"
            imageAlt=""
            name="Nicolò Orlandini"
            text="Contattato dopo essermi rotto la clavicola per recuperare mobilità
              e forza, ho trovato grande competenza e serietà. Oltre alle sedute
              in studio, gli esercizi personalizzati da fare a casa sono stati
              fondamentali per recuperare al meglio."
          ></Review>
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
          <Review
            imageSrc="/images/Avatarexample.jpg"
            imageAlt=""
            name="Alessandro Rozzoni"
            text="Mi sono rivolto a Luca in seguito a un infortunio all’adduttore e
              non posso che ritenermi estremamente soddisfatto del percorso
              fatto insieme. È un professionista competente, attento e sempre
              disponibile."
          ></Review>
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
          <Review
            imageSrc="/images/Avatarexample.jpg"
            imageAlt=""
            name="Luigi Paulli"
            text="Grazie dott. Luca per aver curato mio figlio per l’incidente alla
              spalla ,ora sta benissimo, grazie !! E mia mamma per la frattura
              al polso !! Ottima persona e super professionale!!
              Consigliatissimo , ancora grazie 😃"
          ></Review>
        </CarouselItem>
        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
          <Review
            imageSrc="/images/Avatarexample.jpg"
            imageAlt=""
            name="Monica Marconi"
            text="Sono stata da Luca per riabilitazione a seguito di intervento di protesi al ginocchio. Mi sono ripresa ripresa perfettamente grazie alla sua competenza, professionalità e rigore nel seguirmi in un ambiente familiare e ben curato!"
          ></Review>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
};

export default ReviewCarousel;
