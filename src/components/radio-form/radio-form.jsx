import './radio-form.css';

export function RadioForm({children}){
  return (
    <div className='radio-question'>
        <p>А вам бы пригодился цифровой наставник для улучшения бизнес процессов?</p>
        <div className='radio-opt'>
        <label>
            <input type="radio" name="test" />
            <span className="word_opts">Да</span>
        </label>
        <label>
            <input type="radio" name="test" />
            <span className='word_opts'>Нет</span>
        </label>
        </div>
    </div>
    );
}




