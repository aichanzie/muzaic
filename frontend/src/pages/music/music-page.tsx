import AlbumCard from "../../components/album-cards/album-card";
import CreatorAvatar from "../../components/avatars/creator-avatar";
import PageCarousels from "../../components/page-carousels/page-carousels";
import RankingCard from "../../components/ranking-card/ranking-card";

function MusicPage() {
    return (
        <div>
            <PageCarousels />
            Music Page
            <CreatorAvatar />
            <RankingCard />
            <AlbumCard />
        </div>
    );
}

export default MusicPage;
