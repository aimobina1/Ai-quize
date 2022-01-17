const correctAnswers = ['B' , 'B' , 'B' , 'B']
const form = document.querySelector('.quize-form')
const result = document.querySelector('.result')

form.addEventListener('submit' , e=>{
    e.preventDefault();
    let score = 0 ;

    const userAnswers = [form.q1.value , form.q2.value , form.q3.value , form.q4.value]
    //check ansewrs
    userAnswers.forEach((ansewr , index)=>{
        if(ansewr === correctAnswers[index]){
            score+=25;
        }
    });
    //show result
    result.querySelector('span').textContent=`${score}%`
    result.classList.remove('d-none')
})