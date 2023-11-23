import { ExecutionContext, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';

@Injectable()
export class PublicStrategy extends PassportStrategy(Strategy, 'public') {
  constructor() {
    super();
  }

  // authenticate(): void {
  //   return this.success({ [Symbol.for('isPublic')]: true });
  // }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    // if (isPublic) {
    // 💡 See this condition
    return true;
    // }
    // return false
  }
}
