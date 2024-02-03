import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

import { SafeListing, SafeUser } from "../types";

interface FavouritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavouritesListing: React.FC<FavouritesClientProps> = ({
    listings,
    currentUser
}) => {
    return (
        <Container>
            <Heading
                title="Favourites"
                subtitle="List of places you have favourited"
            />

            <div className="
                mt-10
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-8
            ">
                {listings.map((listing) => (
                    <ListingCard
                        currentUser={currentUser}
                        key={listing.id}
                        data={listing}
                    />
                ))}
            </div>
        </Container>
    );
}

export default FavouritesListing;