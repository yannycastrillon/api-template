var
  Song = require("../model/Song.js")

module.exports ={
  index: (req,res)=>{
    Song.find({},(err,songs)=>{
      res.json(songs);
    })
    // res.json({message:"All Songs!!!"})
  },

  create:(req,res)=>{
    Song.create(req.body, (err,song)=>{
      res.json({message:"Song Created", song:song})
    })
  },

  update:(req,res)=>{
    Song.findByIdAndUpdate(req.params.id, req.body, {new:true},(err,song)=>{
      res.json({message:"Song Updated Successfully", song})
    })
  },

  show: (req,res)=>{
    Song.findById(req.params.id, (err, song)=>{
      res.json({message:"One Song!!!", song})
    })
  },

  delete: (req,res)=>{
    Song.findByIdAndDelete(req.params.id, (err,song)=>{
      res.json({message:"Song deleted!", song})
    })
  }

}
