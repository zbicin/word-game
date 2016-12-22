import ScoreboardModule from './scoreboard'
import ScoreboardController from './scoreboard.controller';
import ScoreboardComponent from './scoreboard.component';
import ScoreboardTemplate from './scoreboard.html';

describe('Scoreboard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ScoreboardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ScoreboardController();
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
      let component = ScoreboardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ScoreboardTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ScoreboardController);
      });
  });
});
