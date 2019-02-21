class SearchBar extends HTMLElement {

    set search(search) {
        <div>
            <form>
                <input type="text" name ="search-bar"></input>
                <button type ="submit"></button>
            </form>
        </div>
    }

}

defineElements.define('search-bar', SearchBar)