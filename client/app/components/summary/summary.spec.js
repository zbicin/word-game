import SummaryModule from './summary'
import SummaryController from './summary.controller';
import SummaryComponent from './summary.component';
import SummaryTemplate from './summary.html';

describe('Summary', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SummaryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SummaryController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
  });

  describe('Component', () => {
      // component/directive specs
      let component = SummaryComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SummaryTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SummaryController);
      });
  });
});
