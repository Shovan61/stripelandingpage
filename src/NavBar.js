import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { elements } from './data';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import './NavBar.css';
import phone from './Images/phone.svg';

const useStyles = makeStyles((theme) => ({
    phone: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 5,
        top: '15rem',
        left: '58rem',
    },
    text: {
        position: 'absolute',
        zIndex: 5,
        top: '21rem',
        left: '5rem',
        width: '60%',
    },
    header: {
        fontSize: '5rem',
        marginBottom: '2rem',
        fontWeight: '1000',
    },
    pg: {
        fontSize: '1.3rem',
        marginBottom: '2rem',
    },
    sidemenuContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    sidemenuHeader: {
        alignSelf: 'center',
    },
    sidemenuContents: {
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        jsutifyContent: 'space-between',
    },
    sidemenuContent: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
    },
}));

function NavBar() {
    const classes = useStyles();
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
    const [curBtn, setcurBtn] = useState('');
    const [location, setlocation] = useState({ center: 0, bottom: 0 });
    const container = useRef(null);

    useEffect(() => {
        const submenu = container.current;

        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
    }, [location]);

    const handleOpenSubMenu = (e) => {
        const text = e.target.textContent;
        const cordinate = e.target.getBoundingClientRect();

        const center = (cordinate.left + cordinate.right) / 2;
        const liftUp = cordinate.bottom - 3;
        if (e.target.classList.contains('link-item')) {
            setisSideMenuOpen(true);
            setcurBtn(text);
            setlocation({ center: center, bottom: liftUp });
        }
    };

    const handleCloseSubmenu = (e) => {
        console.log(e.target.classList);
        if (
            !e.target.classList.contains('link-item') &&
            !e.target.classList.contains('submenu') &&
            !e.target.classList.contains('makeStyles-sidemenuContainer-22') &&
            !e.target.classList.contains('makeStyles-sidemenuContainer-21') &&
            !e.target.classList.contains('') &&
            !e.target.classList.contains('makeStyles-header-19') &&
            !e.target.classList.contains('makeStyles-sidemenuContainer-61')
        ) {
            setisSideMenuOpen(false);
        }
    };

    return (
        <div className='main' onMouseOver={(e) => handleCloseSubmenu(e)}>
            <nav className='navigation'>
                <div className='logo'>
                    <h1>stripe</h1>
                </div>

                <div className='links'>
                    {elements.map((cur) => (
                        <div
                            key={cur.id}
                            className='link-item'
                            onMouseOver={(e) => handleOpenSubMenu(e)}>
                            {cur.name}
                        </div>
                    ))}
                </div>

                <Button
                    variant='contained'
                    style={{ backgroundColor: '#555', color: 'white' }}>
                    Sign In
                </Button>
            </nav>

            <Card
                className={`submenu ${isSideMenuOpen && 'show'}`}
                ref={container}>
                {elements.map((cur) => {
                    const { id, name, items } = cur;
                    if (name === curBtn) {
                        return (
                            <div className={classes.sidemenuContainer}>
                                <h4 className={classes.sidemenuHeader} key={id}>
                                    {name}
                                </h4>
                                <div className={classes.sidemenuContents}>
                                    {items.map((curItem) => {
                                        const { Itemname, id, icon } = curItem;
                                        return (
                                            <div
                                                key={id}
                                                className={
                                                    classes.sidemenuContent
                                                }>
                                                <span>{icon}</span>
                                                <span>{Itemname}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    }
                })}
            </Card>

            <div className='hero'></div>
            <div className={classes.phone}>
                <img src={phone} alt='phone-img' />
            </div>

            <div className={classes.text}>
                <h1 className={classes.header}>
                    Payments infrastructure for the internet
                </h1>
                <p className={classes.pg}>
                    Millions of companies of all sizes—from startups to Fortune
                    500s—use Stripe’s software and APIs to accept payments, send
                    payouts, and manage their businesses online.
                </p>
                <Button
                    variant='contained'
                    style={{ backgroundColor: '#333', color: 'white' }}>
                    Start Now
                </Button>
            </div>
        </div>
    );
}

export default NavBar;
