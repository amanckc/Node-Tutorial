const {readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log('Error');
    }
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log('Error');
        }
        const second=result;
        writeFile('./content/result-async.txt',`hr srhb  erhfbuerf `,(err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            console.log(result);
        })
    })

})