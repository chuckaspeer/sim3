module.exports = {
  register: (req, res, next) => {
    const db = req.app.get("db");
    const { username, password, img } = req.body;
    
    db.register_user([username, password, img])
      .then(createUser => {
        req.session.userid = createUser[0].id;
        return res.status(200).send(createUser[0]);
      })
      .catch(() => res.status(500).send());
  },
  login: (req, res, next) => {
    const db = req.app.get("db");

    const { username, password } = req.params;

    db.login_user([username, password])
      .then(user => {
        req.session.userid = user[0].id;
        return res.status(200).send(user[0]);
      })
      .catch(() => res.status(500).send());
  },
  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).send(req.session);
  },
  getAll: (req, res, next) => {
    const db = req.app.get("db");
    console.log('hit getall')
    db.get_all_post()
      .then(response=>{
        res.status(200).json(response)
      })
    //const { title } = req.query;
    // if (title) {
    //   db.get_search(["%" + title + "%"])
    //     .then(posts => res.status(200).send(posts))
    //     .catch(() => res.status(500).send());
    // } else {
    //   db.get_posts()
    //     .then(posts => res.status(200).send(posts))
    //     .catch(() => res.status(500).send());
    // }
  },
  getOne: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id)
    db.get_post([id])
      .then(post => {
       
         res.status(200).json(post)
      }
      )
      .catch(() => res.status(500).send());
   },
  createPost: (req, res, next) => {
    const db = req.app.get("db");
    const { title, content, imgUrl, id } = req.body;
    //console.log(id);
    db.add_post([title, content, imgUrl, id]).then(response => {
      res.status(200).json(response);
    });
    // console.log(title,content,imgUrl)
  },
  deletePost: (req,res) => {
    const db= req.app.get('db')
    const { id } =req.params;

    db.delete_post([id])
       .then(response=>{
          res.status(200).json(response)
       })

  }
};
