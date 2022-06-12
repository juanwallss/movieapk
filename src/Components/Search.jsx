import {useState, useEffect} from 'react';
import styles from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { useQuery } from '../hooks/useQuery';

export function Search() {
    
    const query = useQuery();
    const search = query.get("search");   



    const history = useHistory();


    const handleSubmit = (e) =>{
    e.preventDefault();
    }
    
    return (
            <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                className={styles.searchInput} 
                placeholder="Search title"
                aria-label="Search Movies"
                onChange={(e) => {
                    const value = e.target.value;
                    history.push("/?search="+value);//cada vez que se teclea se actualiza la grid
                }} 
                value={search} 
                type="text"
                />
                
                    <FaSearch size={20} color="black" className={styles.searchButton} />
                
            </div>
            </form>
      
    );
}
