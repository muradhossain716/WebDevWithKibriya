const kaj1=(name,callback)=>{
    console.log(`${name},bire asece`)
    callback(name)
  };
  const kaj2=(name,callback)=>{
    console.log(`${name}, porte bosece`);
    callback(name)
  }
  const kaj3=(name,callback)=>{
    console.log(`${name}, ok`);
    callback(name)
  }
  const kaj4=(name)=>{
      console.log('sesh')
  }
  kaj1('khair',(name)=>{
    kaj2(name,(name)=>{
        kaj3(name,(name)=>{
            kaj4(name)
        })
    })  
  })

  ////order processing with callback
  const order=(name,callback)=>{
      console.log(`${name} has given order`)
      callback()
  };
  const processorder=(name,callback)=>{
    console.log(`${name}'s order is proccessing`)
    callback()
};
const cooking=(name,callback)=>{
    console.log(`${name}'s food is in the oven`)
    callback()
};
const deliverty=(name,callback)=>{
    console.log(`${name}'s food is on the serve`)
    callback()
};
const feedback=()=>{
    console.log('food was very delicious')
};
order('khair',(nam)=>{
    processorder(nam,(nam)=>{
        cooking(nam,(nam)=>{
            deliverty(nam,(nam)=>{
                feedback()
            })
        })
    })
})