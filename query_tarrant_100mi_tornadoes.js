printjsononeline(
    db.tornadoes.find(
      {
        geometry : {
          $near : {
            $geometry : {
              type : "Point",
              coordinates : [ -97.25, 32.75 ]
            },
            $maxDistance: 160934
          }
        }
      },
      {
        _id: 0
      }).toArray()
    );
