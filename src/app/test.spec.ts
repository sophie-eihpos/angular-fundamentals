describe('first tests spec file', () => {
    it('should be true when true'), () => {
        expect(true).toBe(true);
    }

    it('should be false when false'), () => {
        expect(false).toBe(false);
    }

    it('should be "true" when "true"'), () => {
        expect('true').toBe('true');
    }

    it('should be "false" when "false"'), () => {
        expect('false').toBe('false');
    }

    it('should be 2 when 1 + 1'), () => {
        expect(1 + 1).toBe(2);
    }

    it('should be false when undefined'), () => {
        expect(undefined).toBe(false);
    }

    it('should be false when null'), () => {
        expect(null).toBe(false);
    }
})
