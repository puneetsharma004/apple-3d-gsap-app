import {navLinks} from "../constants/index.js";

export const NavBar = () => {
    return (
        <>
            <header>
                <nav>

                    <img src="/logo.svg" alt="logo" />

                    <ul>

                        {navLinks.map(({label}) => (
                            <li key={label}>
                                <a>{label}</a>
                            </li>
                        ))

                        }

                    </ul>

                    <div className="flex-center gap-3">
                        <button>
                            <img src="search.svg" alt="search.svg" />
                        </button>
                        <button>
                            <img src="cart.svg" alt="cart.svg" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
