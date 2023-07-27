export default {
    e2e: {
        specPattern: `tests/${process.env.CYPRESS_SPEC_FOLDER}/*.spec.js`
    },
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720
};
