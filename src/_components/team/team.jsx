import './team.css';

export function Team() {

    return (<>
        <div id='time' className='team'>
            <p className='title'>Nosso Time</p>
            <div className='team-bubble'>
                <div className='dev'>
                    <div className='photo'><div className='photo-wrap'><img alt='Palhano Dev' src='https://github.com/p4lhano.png' /></div></div>
                    <div className='infos'>
                        <p className='name'>Vitor Palhano</p>
                        <p className='role'>Backend NestJS / Frontend React.js + Vite</p>
                        <div className='social'>
                            <a href="https://github.com/p4lhano"><img alt='Palhano GitHub Icon' src='/github.svg' /></a>
                        </div>
                    </div>
                </div>
                <div className='dev'>
                    <div className='photo'><div className='photo-wrap'><img alt='Poncio Dev' src='https://github.com/ricardoponcio.png' /></div></div>
                    <div className='infos'>
                        <p className='name'>Ricardo Poncio</p>
                        <p className='role'>Backend NestJS / Devops Container</p>
                        <div className='social'>
                            <a href="https://github.com/ricardoponcio"><img alt='Poncio GitHub Icon' src='/github.svg' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}