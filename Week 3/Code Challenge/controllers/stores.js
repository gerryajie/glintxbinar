let data = require("../models/data.json");

class Store {
  getAllStores(req, res, next) {
    try {
      res.status(200).json({ data: data });
    } catch (error) {
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }

  getDetailStore(req, res, next) {
    try {
      let detailData = data.filter(
        (item) => item.id === parseInt(req.params.id)
      );

      if (detailData.length === 0) {
        return res.status(404).json({ errors: ["Store not found"] });
      }

      res.status(200).json({ data: detailData });
    } catch (error) {
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }

  addStore(req, res, next) {
    try {
      let lastId = data[data.length - 1].id;

      data.push({
        id: lastId + 1,
        name: req.body.name,
        branch: req.body.branch,
        address: req.body.address,
      });

      res.status(201).json({ data: data });
    } catch (error) {
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }

  updateStore(req, res, next) {
    try {
      let findData = data.some((item) => item.id === parseInt(req.params.id));

      if (!findData) {
        return res.status(404).json({ errors: ["Store not found"] });
      }

      data = data.map((item) =>
        item.id === parseInt(req.params.id)
          ? {
              id: parseInt(req.params.id),
              name: req.body.name,
              branch: req.body.branch,
              address: req.body.address,
            }
          : item
      );

      res.status(200).json({ data: data });
    } catch (error) {
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }

  deleteStore(req, res, next) {
    try {
      let findData = data.some((item) => item.id === parseInt(req.params.id));

      if (!findData) {
        return res.status(404).json({ errors: ["Store not found"] });
      }

      data = data.filter((item) => item.id !== parseInt(req.params.id));

      res.status(200).json({ data: data });
    } catch (error) {
      res.status(500).json({
        errors: ["Internal Server Error"],
      });
    }
  }
}

module.exports = new Store();
