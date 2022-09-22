const userDB = require('../../service/mongoDB/mongoDB');



const editCard = async (req, res, next) => {
    const {cardId} = req.query;
    const {email} = req.user;
    const data = req.body;
    const user = await userDB.findUser({email});
    
    const card = user?.cards.find((card)=> card._id.toString() === cardId.toString())
    
    const cardIndex = user?.cards.findIndex(
    (card) => card._id.toString() === cardId.toString());

    // console.log(card);
    
        // const id = user._id

    if (!card || cardIndex === undefined) {
        return res.status(400).send({ message: "Invalid 'cardId'" });
    }
    
    // console.log(id);
    
    const newCard = {...card, ...req.body};
    // console.log(newCard);
    const result = await userDB.putContact({cards:cardId}, newCard);
    // console.log(result);


    res.status(200).json({message:result}); 
};



module.exports = {
    editCard,
};