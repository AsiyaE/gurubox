import '../button-control.css';

export function ButtonNext(){

  return (
      <button className='button-control'>
        <span>Вперед</span>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7.5L30 18M30 18L20 28.5M30 18L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
);
}