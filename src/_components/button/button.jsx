import './button.css';

export function Button({ title, href, submit }) {

    return (<>
        {
            submit ? <button type='submit' className='button' href={href}>{title}</button> :
                href ? <a className='button-wrap' href={href} target={href?.includes('http') ? '__blank' : ''}><button className='button' href={href}>{title}</button></a> :
                    <button className='button'>{title}</button>
        }
    </>);
}