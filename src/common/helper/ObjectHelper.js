const ObjectHelper = {
    /**
     * example test = { id: 100, name: 'test', password: '1234' }
     * removePropertyByKey('name')(test) remove propety name
     * removePropertyByKey('id')(test) remove propety id
     */
    removePropertyByKey: (prop) => ({ [prop]: _, ...rest }) => rest,
};

export default ObjectHelper;
