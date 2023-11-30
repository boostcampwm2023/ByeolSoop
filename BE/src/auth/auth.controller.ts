import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { AccessTokenDto } from "./dto/auth-access-token.dto";
import {
  ExpiredOrNotGuard,
  NoDuplicateLoginGuard,
} from "./guard/auth.user-guard";
import { CreateUserDto } from "./dto/users.dto";
import { User } from "./users.entity";
import { GetUser } from "./get-user.decorator";
import { JwtAuthGuard } from "./guard/auth.jwt-guard";
import { Request } from "express";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  @HttpCode(204)
  async signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
    await this.authService.signUp(createUserDto);
    return;
  }

  @Post("/signin")
  @UseGuards(NoDuplicateLoginGuard)
  async signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
    @Req() request: Request,
  ): Promise<AccessTokenDto> {
    return await this.authService.signIn(authCredentialsDto, request);
  }

  @Post("/signout")
  @UseGuards(ExpiredOrNotGuard)
  @HttpCode(204)
  async signOut(@GetUser() user: User): Promise<void> {
    await this.authService.signOut(user);
  }

  @Post("/reissue")
  @UseGuards(ExpiredOrNotGuard)
  @HttpCode(201)
  async reissueAccessToken(@Req() request: Request): Promise<AccessTokenDto> {
    return await this.authService.reissueAccessToken(request);
  }
}
