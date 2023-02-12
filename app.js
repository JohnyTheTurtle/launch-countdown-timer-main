const target_date = new Date("2023-04-10T20:00:00")


const calc_remaining_time = function(target_date){
    const now = new Date()
    let date_diff = target_date - now
    let day_diff = Math.floor(date_diff/1000/60/60/24)
    let hour_diff = Math.floor((date_diff-day_diff*1000*60*60*24)/1000/60/60)
    let min_diff = Math.floor((date_diff-day_diff*1000*60*60*24-hour_diff*1000*60*60)/1000/60)
    let sec_diff = Math.floor((date_diff-day_diff*1000*60*60*24-hour_diff*1000*60*60-min_diff*1000*60)/1000)
    
    return [day_diff, hour_diff, min_diff, sec_diff]
}
const update_countdown = function(){
    // console.log(calc_remaining_time(target_date))
    const coundown_timer = calc_remaining_time(target_date)
    const fields = ["day", "hrs", "min", "sec"]
    for(let i =0; i < fields.length; i++){
        const new_top = document.getElementById(`${fields[i]}-new-top`)
        const new_bottom = document.getElementById(`${fields[i]}-new-bottom`)
        const old_top = document.getElementById(`${fields[i]}-old-top`)
        const old_bottom = document.getElementById(`${fields[i]}-old-bottom`)
        //animations
        const clockSpinningOld = [
            { transform: 'rotateX(0deg)' },
            { transform: 'rotateX(180deg)' }
          ];
        const clockSpinningNew = [
            { transform: 'rotateX(-90deg)' },
            { transform: 'rotateX(0)' }
          ];

        if (Number(new_bottom.innerText) !== coundown_timer[i]){
            
            new_top.innerText = coundown_timer[i]
            new_bottom.innerText = coundown_timer[i]
            old_top.innerText = coundown_timer[i]+1
            old_bottom.innerText = coundown_timer[i]+1


            old_top.animate(clockSpinningOld, 500)
            new_bottom.animate(clockSpinningNew, 500)

            old_top.style.animation = "rotate-clock-old 0.5s forwards"
            new_bottom.style.animation = "rotate-clock-new 0.5s forwards"
            new_bottom.style.animationDelay = "0.5s"
            
        }


        
        
        
        

    }
}
update_countdown() 
setInterval(function(){ 
    update_countdown()  
}, 1000);
