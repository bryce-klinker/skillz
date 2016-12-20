import * as React from 'react';
import * as ReactDOM from 'react-dom';

describe('Main', () => {
    let rootElement: HTMLElement;

    beforeEach(() => {
        rootElement = document.createElement('div');
        spyOn(document, 'getElementById').and.returnValue(rootElement);
        spyOn(ReactDOM, 'render').and.callFake(() => {
        });
    });

    it('should render provider', () => {
        require('./main');
        expect(ReactDOM.render).toHaveBeenCalledWith(jasmine.anything(), rootElement);
    });
});