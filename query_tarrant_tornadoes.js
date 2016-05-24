printjsononeline(
    db.tornadoes.find(
      {
        geometry : {
          $geoWithin : {
            $geometry :
              db.counties.findOne(
                {
                  "properties.NAME": "Tarrant",
                  "properties.STATEFP": "48"
                }).geometry
          }
        }
      },
      {
        _id: 0
      }).toArray()
    );
