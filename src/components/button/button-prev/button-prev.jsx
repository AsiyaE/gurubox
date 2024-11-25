import '../button-control.css';

export function ButtonPrev(){

  return (
      <button className='button-control'>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9995 28.5L5.99951 18M5.99951 18L15.9995 7.5M5.99951 18L29.9995 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Назад</span>
    </button>
);
}