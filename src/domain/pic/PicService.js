export default class PicService {

    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    save(pic) {

        if (pic._id) {
            return this._resource
                .update({ id: pic._id }, pic);
        } else {
            return this._resource
                .save(pic);
        }

    }

    getAll() {

        return this._resource
            .query()
            .then(getResponse => getResponse.json());

    }

    find(id) {

        return this._resource
            .get({ id })
            .then(getResponse => getResponse.json());

    }

    delete(id) {

        return this._resource.delete({ id });

    }

}