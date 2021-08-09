import style from "styled-components"

export const Container = style.div`
    padding: 1rem;
    margin: .5rem;
`

export const Header = style.header`
    padding: .5rem;
    margin-bottom: 2rem;
    background-color: #F4EBCD;
    box-shadow: 0 1px 2px #4444;
`

export const Row = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    max-width: 1024px;
    margin: auto;
`

export const List = style.ul`
    list-styke: none;
    li {
        display: inline-block;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 3px solid transparent;
        transition: .25s;
        color: #777;
        &:hover {
            border-bottom: 3px solid #4444;
            color: #444;
        }
        &:not(:last-of-type) {
            margin-right: 1rem;
        }
        &.active {
            border-bottom: 3px solid #444C;
            color: #444;
        }
    }
`

export const Section = style.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionBlack = style(Section)`
    margin: -5px 0;
    background-color: #2F394D;
    color: #CCC;
`

export const Article = style.article`
    padding:  2rem 1.5rem;
    margin: 1rem .5rem;
    border-radius: 8px 24px;
    background-color: #38182F;
    box-shadow: 0 2px 3px #111C;
    color: #CCC;
    max-width: 1024px;
    h1,h2,h3{
        margin-bottom: 1rem;
    }
`

export const Footer = style.footer`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding: 1.5rem .5rem;
    padding-bottom: 1rem;
    background-color: #2F394D;
    color: #BBB;
`