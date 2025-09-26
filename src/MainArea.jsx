import Home from './Home';
import Cats from './Cats';
import Donate from './Donate';
import Questions from './Questions';

function MainArea( {page, goToPage} ) {
    return (
        <main>
            { page === '/' && <Home/>}
            { page === '/cats' && <Cats goToPage={goToPage}/>}
            { page === '/donate' && <Donate/>}
            { page === '/questions' && <Questions/>}

        </main>
    );
}

export default MainArea;