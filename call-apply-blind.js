const RealName = {
    FirstName : "Danish",
    SecondName : "kukku",
    FullName : function(){
        console.log(this.FirstName+" "+this.SecondName)
    }
}
RealName.FullName()

const RealName2 ={
    FirstName : "Sulaiman",
    SecondName : "Koya"
}
RealName.FullName.call(RealName2)
RealName.FullName.apply(RealName2)
const BindName =RealName.FullName.bind(RealName2)
BindName()
