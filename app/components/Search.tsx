import React, {
    useState,
    useRef,
    useCallback,
    FC,
    ChangeEvent,
    MouseEvent,
} from "react";
import debounce from "lodash.debounce";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "@/context/GlobalContext";

export const Search: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const { setSearchQuery } = useGlobalContext();
    const inputRef = useRef<HTMLInputElement>(null);

    const onClear = () => {
        setSearchValue("");
        inputRef.current?.focus();
    };

    const updateSearchInput = useCallback(
        debounce((str: string) => {
            setSearchQuery(str);
        }, 400),
        []
    );

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        updateSearchInput(event.target.value);
    };
    return (
        <div className="relative h-1/2 w-1/3 text-black">
            <FaSearch className="w-[30px] h-[30px] opacity-70 absolute left-[15px] top-1/3" />
            <input
                ref={inputRef}
                value={searchValue}
                onChange={(event) => onChangeInput(event)}
                className="bg-white border w-full h-full transition-all duration-[0.15s] ease-[ease-in-out] pl-[50px] px-5 py-3 rounded-[10px] border-solid border-[rgba(0,0,0,0.1)] focus:border focus:border-solid focus:border-[rgba(0,0,0,0.2)] text-5xl"
                placeholder="Start typing the todo title..."
            />
            {searchValue && (
                <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[35px] h-[35px] opacity-50 absolute cursor-pointer right-[10px] top-1/3 hover:opacity-80"
                    onClick={onClear}
                >
                    <path
                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </div>
    );
};
